export class Rifle{
	name:String;
	weapon_type:String;
	noise_level:String;
	fire_rate:number;
	charge_time:number;
	accuracy:number;
	mag_size:number;
	max_ammo:number;
	reload_time:number;
	impact:number;
	puncture:number;
	slash:number;
	fire:number;
	toxin:number;
	ice:number;
	electricity:number;
	gas:number;
	blast:number;
	radiation:number;
	viral:number;
	corrosive:number;
	magnetic:number;
	crit_c:number;
	crit_d:number;
	status:number;
	madurai:number;
	naramon:number;
	vazarin:number;
	zenurik:number;
	penjaga:number;
	unairu:number;
	secondary:number;
	secondary_noise_level:String;
	secondary_fire_rate:number;
	secondary_charge_time:number;
	secondary_accuracy:number;
	secondary_mag_size:number;
	secondary_max_ammo:number;
	secondary_reload_time:number;
	secondary_impact:number;
	secondary_puncture:number;
	secondary_slash:number;
	secondary_fire:number;
	secondary_toxin:number;
	secondary_ice:number;
	secondary_electricity:number;
	secondary_gas:number;
	secondary_blast:number;
	secondary_radiation:number;
	secondary_viral:number;
	secondary_corrosive:number;
	secondary_magnetic:number;
	secondary_crit_c:number;
	secondary_crit_d:number;
	secondary_status:number;
	secondary_power_strength:number;

	// Constructors

	constructor(jsonObject){
		var stats = [
        "NAME",
        "WEAPON_TYPE",
        "NOISE_LEVEL",
        "FIRE_RATE",
        "CHARGE_TIME",
        "ACCURACY",
        "MAG_SIZE",
        "MAX_AMMO",
        "RELOAD_TIME",
        "IMPACT",
        "PUNCTURE",
        "SLASH",
        "FIRE",
        "TOXIN",
        "ICE",
        "ELECTRICITY",
        "GAS",
        "BLAST",
        "RADIATION",
        "VIRAL",
        "CORROSIVE",
        "MAGNETIC",
        "CRIT_C",
        "CRIT_D",
        "STATUS",
        "MADURAI",
        "NARAMON",
        "VAZARIN",
        "ZENURIK",
        "PENJAGA",
        "UNAIRU",
		"SECONDARY",
        "SECONDARY_NOISE_LEVEL",
        "SECONDARY_FIRE_RATE",
        "SECONDARY_CHARGE_TIME",
        "SECONDARY_ACCURACY",
        "SECONDARY_MAG_SIZE",
        "SECONDARY_MAX_AMMO",
        "SECONDARY_RELOAD_TIME",
        "SECONDARY_IMPACT",
        "SECONDARY_PUNCTURE",
        "SECONDARY_SLASH",
        "SECONDARY_FIRE",
        "SECONDARY_TOXIN",
        "SECONDARY_ICE",
        "SECONDARY_ELECTRICITY",
        "SECONDARY_GAS",
        "SECONDARY_BLAST",
        "SECONDARY_RADIATION",
        "SECONDARY_VIRAL",
        "SECONDARY_CORROSIVE",
        "SECONDARY_MAGNETIC",
        "SECONDARY_CRIT_C",
        "SECONDARY_CRIT_D",
        "SECONDARY_STATUS",
        "SECONDARY_POWER_STRENGTH"
    ]
		stats.forEach(element =>{
			var statname = '' + element.toLowerCase();
			this[statname] = jsonObject[element];
		});
	}

	//Getters and Setters

	getName() { return this.name; }
	getWeapon_type() { return this.weapon_type; }
	getNoise_level() { return this.noise_level; }
	getFire_rate() { return this.fire_rate; }
	getCharge_time() { return this.charge_time; }
	getAccuracy() { return this.accuracy; }
	getMag_size() { return this.mag_size; }
	getMax_ammo() { return this.max_ammo; }
	getReload_time() { return this.reload_time; }
	getImpact() { return this.impact; }
	getPuncture() { return this.puncture; }
	getSlash() { return this.slash; }
	getFire() { return this.fire; }
	getToxin() { return this.toxin; }
	getIce() { return this.ice; }
	getElectricity() { return this.electricity; }
	getGas() { return this.gas; }
	getBlast() { return this.blast; }
	getRadiation() { return this.radiation; }
	getViral() { return this.viral; }
	getCorrosive() { return this.corrosive; }
	getMagnetic() { return this.magnetic; }
	getCrit_c() { return this.crit_c; }
	getCrit_d() { return this.crit_d; }
	getStatus() { return this.status; }
	getMadurai() { return this.madurai; }
	getNaramon() { return this.naramon; }
	getVazarin() { return this.vazarin; }
	getZenurik() { return this.zenurik; }
	getPenjaga() { return this.penjaga; }
	getUnairu() { return this.unairu; }
	getSecondary() { return this.secondary; }
	getSecondary_noise_level() { return this.secondary_noise_level; }
	getSecondary_fire_rate() { return this.secondary_fire_rate; }
	getSecondary_charge_time() { return this.secondary_charge_time; }
	getSecondary_accuracy() { return this.secondary_accuracy; }
	getSecondary_mag_size() { return this.secondary_mag_size; }
	getSecondary_max_ammo() { return this.secondary_max_ammo; }
	getSecondary_reload_time() { return this.secondary_reload_time; }
	getSecondary_impact() { return this.secondary_impact; }
	getSecondary_puncture() { return this.secondary_puncture; }
	getSecondary_slash() { return this.secondary_slash; }
	getSecondary_fire() { return this.secondary_fire; }
	getSecondary_toxin() { return this.secondary_toxin; }
	getSecondary_ice() { return this.secondary_ice; }
	getSecondary_electricity() { return this.secondary_electricity; }
	getSecondary_gas() { return this.secondary_gas; }
	getSecondary_blast() { return this.secondary_blast; }
	getSecondary_radiation() { return this.secondary_radiation; }
	getSecondary_viral() { return this.secondary_viral; }
	getSecondary_corrosive() { return this.secondary_corrosive; }
	getSecondary_magnetic() { return this.secondary_magnetic; }
	getSecondary_crit_c() { return this.secondary_crit_c; }
	getSecondary_crit_d() { return this.secondary_crit_d; }
	getSecondary_status() { return this.secondary_status; }
	getSecondary_power_strength() { return this.secondary_power_strength; }
}
