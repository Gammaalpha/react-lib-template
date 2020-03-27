set -e

yarn build-wp

rm -rf production

mkdir production

cd production

cp ../dist prod -r

# cp ../{package.json,.gitignore,.npmignore} ./

git init

git add -A

git commit -m "deploy"

git push -f git@github.com:Gammaalpha/react-lib-template.git master:production

cd ..

rm -rf production/
