DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS rsvps CASCADE;

CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	name VARCHAR(255),
	email VARCHAR(255),
	password VARCHAR(255),
	secret_code VARCHAR(255)
);

CREATE TABLE rsvps (
	id SERIAL PRIMARY KEY,
	first_name VARCHAR(255),
	last_name VARCHAR(255),
	rsvp BOOLEAN,
	rsvp_food_choice VARCHAR(255),
	guest_name VARCHAR(255),
	guest_food_choice VARCHAR(255),
	kid_names VARCHAR(255),
	kids_food_choices VARCHAR(255),
	phone VARCHAR(255),
	address VARCHAR(255),
	message TEXT,
	user_id INTEGER references users
);
