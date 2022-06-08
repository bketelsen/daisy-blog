{
	_schema: {
		name:      "Profile"
		namespace: "schemas.cueblox.com"
	}

	#Profile: {
		_dataset: {
			plural: "profiles"
			supportedExtensions: ["yaml", "yml", "md", "mdx"]
		}

		first_name: string @template("Forename")
		last_name:  string @template("Surname")
		age?:       int    @template(21)
		company?:   string @template("CueBlox")
		title?:     string @template("Cue Slinger")
		body?:      string @template("☕️ Required")
		image?:     string @relationship(Image)
		avatar?:    string @relationship(Image)
		twitter?:   string @template("bketelsen")
		github?:    string @template("bketelsen")
		youtube?:   string @template("bketelsen")
		twitch?:    string @template("bketelsen")
	}
}
