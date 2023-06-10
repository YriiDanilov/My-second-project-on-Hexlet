install:
	nmp ci

publish:
	nmp publish --run-dry

lint:
	npx eslint .