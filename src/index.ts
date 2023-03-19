/**
 * Nexus is an all-in-one API handler. Use Nexus to handle & stores your APIs you use.
 *
 * Made for Developers 😀
 */

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
	const user = await prisma.user.create({
		data: {
			name: 'Jason',
			password: 'password',
		},
	});
	console.log(user);
}

main();

console.log(
	'================================\nNexus is built with Typescript. \n©️ 2023, NexusAPI LTD, All rights reserved'
);
