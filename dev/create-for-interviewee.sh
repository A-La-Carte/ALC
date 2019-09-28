#!/bin/bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

REPOSITORY="$1"
PERSON_NAME="$2"
DB_PASSWORD="$3"

sed -i "s@testproject_@testproject_${PERSON_NAME}_@g" $DIR/../server/config/.env.db*
sed -i "s@DB_USER=.*@DB_USER=testproject$PERSON_NAME@g" $DIR/../server/config/.env.db*
sed -i "s@DB_PASS=.*@DB_PASS='$DB_PASSWORD'@g" $DIR/../server/config/.env.db*

git add "$DIR/../server/config"
git commit -m 'Customize database credentials'

git remote add "$PERSON_NAME" "$REPOSITORY"
git push -u "$PERSON_NAME" master

mysql <<END
CREATE DATABASE IF NOT EXISTS testproject_${PERSON_NAME}_dev CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE DATABASE IF NOT EXISTS testproject_${PERSON_NAME}_test CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE DATABASE IF NOT EXISTS testproject_${PERSON_NAME} CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE USER IF NOT EXISTS 'testproject${PERSON_NAME}'@'%' IDENTIFIED BY '$DB_PASSWORD';
GRANT USAGE ON *.* TO 'testproject${PERSON_NAME}'@'%' REQUIRE NONE WITH MAX_QUERIES_PER_HOUR 0 MAX_CONNECTIONS_PER_HOUR 0 MAX_UPDATES_PER_HOUR 0 MAX_USER_CONNECTIONS 0;
GRANT ALL PRIVILEGES ON testproject_${PERSON_NAME}_dev.* TO 'testproject${PERSON_NAME}'@'%';
GRANT ALL PRIVILEGES ON testproject_${PERSON_NAME}_test.* TO 'testproject${PERSON_NAME}'@'%';
GRANT ALL PRIVILEGES ON testproject_${PERSON_NAME}.* TO 'testproject${PERSON_NAME}'@'%';
END

yarn install
yarn init-db-dev

git branch --set-upstream-to=origin/master
git reset --hard origin/master
