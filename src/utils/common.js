module.exports = {
	cleanUp,
};

function cleanUp(data) {
	if (!data) {
		return data;
	}

	if (!data.toJSON) {
		return data;
	}

	return data.toJSON();
}
