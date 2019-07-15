BASEDIR=$(basename $(pwd))

if [ "$BASEDIR" != "vuepress" ]; then
	echo "INCORRECT DIRECTORY"
# elif [ "$BASEDIR"="$CORRECTDIR" ]; then
else
	# abort on errors
	set -e
	
	# build
	npm run docs:build
	
	# put buil archives on root directory
	cp -rf docs/.vuepress/dist/* ./
	# cp -rf docs/assets/img/* ./assets/img
	rm -rf docs/.vuepress/dist
fi
exit