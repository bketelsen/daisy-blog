{
	_schema: {
		name:      "Shortcode"
		namespace: "schemas.cueblox.com"
	}

	#Shortcode: {
		_dataset: {
			plural: "shortcodes"
			supportedExtensions: ["yaml", "yml"]
		}

		target:     string @template("https://google.com")
		variations?: [...#Variant]
	}

	#Variant: {
    id: int
		campaign?:  string @template("mycampaign")
		medium?: string @template("social")
		source?: string @template("twitter")
	}
}

