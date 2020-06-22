#!/bin/sh

#   存放路径：clonePath/projectName
#   $1 = clonePath  ../xx/FE
#   $2 = projectName    test
#   $3 = gitUrl     ssh://...
#   $4 = tagOrBranch
#   $5 = movePath

#   mkdir -p 有则忽略，没有则创建


mkdir -p $1;
cd $1;

if [ ! -d $2 ]; then
    git clone $3;
fi

cd $2;
git checkout $4;
git pull origin $4;

npm install;
npm run build;

mkdir -p $5;

cp -r dist/* $5;

