"use strict";
const assert = require("assert");

// This is an object that has types of jobs and the values each provide.
const jobTypes = {
	pilot: "MAV",
	mechanic: "Repair Ship",
	commander: "Main Ship",
	programmer: "Any Ship!"
};

// Your code will go here

class CrewMember {
	constructor(name, job, skill) {
		this.name = name;
		this.job = job;
		this.specialSkill = skill;
		this.ship = null;
	}

	enterShip(n) {
		this.ship = n; // assigned this.ship to n
		n.crew.push(this); //will push the crew member being assigned a ship crewMember1.enterShip(mav) to Ship.crew.  Push method pushes to an array; thus, the empty array for this.crew = []
		// console.log(this);  // have a question about [Circluar] reference.
	}
}

const crewMember1 = new CrewMember("Rick Martinez", "pilot", "chemistry");
const crewMember2 = new CrewMember("Commander Lewis", "commander", "geology");

// console.log(crewMember1.name, crewMember1.specialSkill);

class Ship {
	constructor(shipName, shipType, shipAbility) {
		this.name = shipName;
		this.type = shipType;
		this.ability = shipAbility;
		this.crew = [];
	}
	missionStatement() {
		// null does not work. test gives a hint with .length
		if (this.crew.length === 0) {
			return "Can't perform a mission yet.";
		} else {
			return this.ability; // target this.ability because the ability is in relation to the ship rather than the crew.  had written if statements for each ship - redundant!  all that is needed is this.ability that will pull for ship being passed through.
		}
	}
}

let mav = new Ship("Mars Ascent Vehicle", "MAV", "Ascend into low orbit");
crewMember1.enterShip(mav);

let hermes = new Ship("Hermes", "Main Ship", "Interplanetary Space Travel");
crewMember2.enterShip(hermes);

//     Make sure Crew Members can enter Ships

// Begin by reading the tests and building a function that will full each one.
// As you build, you might not have to build them in order, maybe you do...
// These are the tests
if (typeof describe === "function") {
	describe("CrewMember", function() {
		it("should have a name, a job, a specialSkill and ship upon instantiation", function() {
			// this creates a CrewMember and passes the following arguments into its constructor:
			// 'Rick Martinez', 'pilot', 'chemistry'
			const crewMember1 = new CrewMember("Rick Martinez", "pilot", "chemistry");
			assert.equal(crewMember1.name, "Rick Martinez");
			assert.equal(crewMember1.job, "pilot");
			assert.equal(crewMember1.specialSkill, "chemistry");
			assert.equal(crewMember1.ship, null);
		});

		it("can enter a ship", function() {
			// this creates a new Ship. Can you build a class that can be called so that this Ship can be built?
			let mav = new Ship("Mars Ascent Vehicle", "MAV", "Ascend into low orbit");
			const crewMember1 = new CrewMember("Rick Martinez", "pilot", "chemistry");
			crewMember1.enterShip(mav);
			assert.equal(crewMember1.ship, mav);
			assert.equal(mav.crew.length, 1);
			assert.equal(mav.crew[0], crewMember1);
		});
	});

	describe("Ship", function() {
		it("should have a name, a type, an ability and an empty crew upon instantiation", function() {
			let mav = new Ship("Mars Ascent Vehicle", "MAV", "Ascend into low orbit");
			assert.equal(mav.name, "Mars Ascent Vehicle");
			assert.equal(mav.type, "MAV");
			assert.equal(mav.ability, "Ascend into low orbit");
			assert.equal(mav.crew.length, 0);
		});

		it("can return a mission statement correctly", function() {
			let mav = new Ship("Mars Ascent Vehicle", "MAV", "Ascend into low orbit");
			const crewMember1 = new CrewMember("Rick Martinez", "pilot", "chemistry");
			let hermes = new Ship(
				"Hermes",
				"Main Ship",
				"Interplanetary Space Travel"
			);
			const crewMember2 = new CrewMember(
				"Commander Lewis",
				"commander",
				"geology"
			);
			assert.equal(mav.missionStatement(), "Can't perform a mission yet."); // no crew member, no mission
			assert.equal(hermes.missionStatement(), "Can't perform a mission yet.");

			crewMember1.enterShip(mav);
			assert.equal(mav.missionStatement(), "Ascend into low orbit"); //ability

			crewMember2.enterShip(hermes);
			assert.equal(hermes.missionStatement(), "Interplanetary Space Travel"); //ability
		});
	});
}

//
