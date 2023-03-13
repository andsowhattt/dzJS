class Ukrainian {
	constructor(position, field, experience) {
		this.position = position;
		this.field = field;
		this.experience = experience;
		this.isPatriot = true;
		this.isDemoctaricViews = true;
		this.isIndependent = true;
		this._motto = 'Slava Ukraine!';
	}

	get motto() {
		return this._motto;
	}

	set motto(value) {
		this._motto = value;
		if (this._motto === 'Go Russia!') {
			this.isPatriot = false;
			this.isDemoctaricViews = false;
			this.isIndependent = false;
		}
	}

	display() {
		if (this.isPatriot) {
			console.log(`Position: ${this.position}, Motto: ${this.motto}`);
		} else {
			console.log(`Position: ${this.position}, Status: Enemy`);
		}
	}
}

class Zelensky extends Ukrainian {
	constructor(position, field, experience, reputation) {
		super(position, field, experience)
		this.reputation = reputation;
		this.weapon = 'Diplomacy';
	}

	Negotiations() {
		console.log(`${this.position} attacks with ${this.weapon}!`);
	}

	levelOfReputation() {
		this.reputation += 100;
	}

	useMotto() {
		this.motto += "Heroyam Slava";
	}
}

class Zaluzhny extends Ukrainian {
	constructor(position, field, experience, strengths) {
		super(position, field, experience);
		this.strengths = strengths;
		this.weapon = 'Himars';
	}

	attack(target) {
		console.log(`${this.position} attacks ${target.position} with ${this.weapon}!`);
		target.motto += this.strengths;
	}

	killingRus() {
		console.log(`${this.position} killing svunosobak!`);
	}

	retreat() {
		console.log(`${this.position} retreats!`);
		this.isIndependent = false;
	}
}

class Budanov extends Ukrainian {
	constructor(position, field, experience, intelligence) {
		super(position, field, experience);
		this.intelligence = intelligence;
		this.dream = 'Crimea';
	}

	facts() {
		console.log(`${this.dream} is occupied!`);
		this.isIndependent = false;
	}

	prognostication() {
		console.log(`${this.position} predicts the victory of Ukraine in the spring of 2023!`);
	}

	diversion() {
		console.log(`${this.position} does intelligence!`);
		this.isPatriot = true;
	}
}

class Syrsky extends Zaluzhny {
	constructor(position, field, experience, strengths, tactics) {
		super(position, field, experience, strengths);
		this.tactics = tactics;
		this.weapon = "Army";
		this._motto = "Heroyam Slava";
	}

	defense() {
		console.log(`${this.position} protects together with ${this.weapon} Bakhmut fortress!`);
	}

	useMagic() {
		console.log(`${this.position} uses ${this.tactics}!`);
		this.isPatriot = false;
	}

	curse(target) {
		console.log(`${this.position} curses ${target.position}!`);
		target.isPatriot = false;
	}
}

