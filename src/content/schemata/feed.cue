{
	_schema: {
		name:      "Feed"
		namespace: "schemas.cueblox.com"
	}

	#Feed: {
		_dataset: {
			plural: "feeds"
			supportedExtensions: ["yaml", "yml"]
		}

		title:       string @template("Bytes")
		link:        string @template("https://www.brian.dev")
		description: string @template("I found this interesting thing...")
		draft:       bool | *false
		image?:      string @relationship(Image)
		category?:   string @relationship(Category)
		profile?:    string @relationship(Profile)
	}

}
