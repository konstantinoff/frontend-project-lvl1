brain-games:
	node src/bin/brain-games.js

install:
	npm install

publish:
	npm publish --dry-run

link:
	npm link

lint:
	npx eslint .
