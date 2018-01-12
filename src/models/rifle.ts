export class Rifle{
	name:String;
	weapon_type:String;
	noise_level:String;
	fire_rate:Float32Array;
	charge_time:Float32Array;
	accuracy:Float32Array;
	mag_size:Float32Array;
	max_ammo:Float32Array;
	reload_time:Float32Array;
	impact:Float32Array;
	puncture:Float32Array;
	slash:Float32Array;
	fire:Float32Array;
	toxin:Float32Array;
	ice:Float32Array;
	electricity:Float32Array;
	gas:Float32Array;
	blast:Float32Array;
	radiation:Float32Array;
	viral:Float32Array;
	corrosive:Float32Array;
	magnetic:Float32Array;
	crit_c:Float32Array;
	crit_d:Float32Array;
	status:Float32Array;
	madurai:Float32Array;
	naramon:Float32Array;
	vazarin:Float32Array;
	zenurik:Float32Array;
	penjaga:Float32Array;
	unairu:Float32Array;
	secondary:Float32Array;
	secondary_noise_level:String;
	secondary_fire_rate:Float32Array;
	secondary_charge_time:Float32Array;
	secondary_accuracy:Float32Array;
	secondary_mag_size:Float32Array;
	secondary_max_ammo:Float32Array;
	secondary_reload_time:Float32Array;
	secondary_impact:Float32Array;
	secondary_puncture:Float32Array;
	secondary_slash:Float32Array;
	secondary_fire:Float32Array;
	secondary_toxin:Float32Array;
	secondary_ice:Float32Array;
	secondary_electricity:Float32Array;
	secondary_gas:Float32Array;
	secondary_blast:Float32Array;
	secondary_radiation:Float32Array;
	secondary_viral:Float32Array;
	secondary_corrosive:Float32Array;
	secondary_magnetic:Float32Array;
	secondary_crit_c:Float32Array;
	secondary_crit_d:Float32Array;
	secondary_status:Float32Array;
	secondary_power_strength:Float32Array;


	// Constructors

	constructor(){}

	// Methods

	/*fromJson = function (json){
    var r = JSON.parse (json);
    return new Rifle (json.NAME);
	}*/

	//Getters and Setters

	getName(){
		return name;
	}

	setName(str){
		this.name = str;
	}
}
