let { cleanUp } = require('src/utils/common');

let Group = require('src/modules/groups/model');
let Teacher = require('src/modules/teachers/model');

let Student = require('./model');

module.exports = {
	getById,
	create,
	getAll,
	removeById,
	updateById
};

async function create(data) {
	try {
		let createdStudent = await Student.create(data);

		return cleanUp(createdStudent);
	} catch (error) {
		throw error;
	}
}

async function getById(id) {
	try {
		let student = await Student.findByPk(id, {
			include: [
				{ 
					model: Group,
					include: [
						{
							model: Teacher
						}
					]
				}
			]
		});

		return cleanUp(student);
	} catch (error) {
		throw error;
	}
}

async function getAll() {
	try {
		let students = await Student.findAll({
			include: [
				{ 
					model: Group,
					include: [
						{
							model: Teacher
						}
					]
				}
			]
		});

		return students.map(cleanUp);
	} catch (error) {
		throw error;
	}
}

async function removeById(id) {
	try {
		await Student.destroy({
			where: {
				id
			},
		});

		return { id };
	} catch (error) {
		throw error;
	}
}

async function updateById(id, data) {
	try {
		await Student.update(
			data,
			{
				where: { id }
			}
		);

		return getById(id);
	} catch (error) {
		throw error;
	}
}
