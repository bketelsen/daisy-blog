{
	_schema: {
		name:      "FeedItem"
		namespace: "schemas.cueblox.com"
	}

	#FeedItem: {
		_dataset: {
			plural: "feeditems"
			supportedExtensions: ["yaml", "yml"]
		}

		feed_id:      string
		title:        string @template("Item Title")
		link:         string @template("https://your.link.com")
		description:  string @template("I found this interesting thing...")
		draft:        bool | *false
		publish_date: string @template("2021-01-01")
		image?:       string @relationship(Image)
		category?:    string @relationship(Category)
		profile?:     string @relationship(Profile)
	}

}
