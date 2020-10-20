## Take Your Note

###### This is a sample REST API made with NodeJS, Express, Mongoose and RabbitMQ to send e-mail asynchronously

**You can create a user making a POST request to /owners path**

	URI: http(s)://your-host/owners

	Payload Example:
	{
		"email": "youremail@domain.com"
	}

**You can create a new note making a POST request to /notes path**

	URI: http(s)://your-host/notes

	Payload Example:

	{
		"title": "Third Note",
		"description": "This is another note.",
		"owner": "GENERATED_OWNER_ID"
	}

**You can get your notes using the GET operation in /notes/:owner_id/:send_email_flag**

	URIs: 
	 - http(s)://your-host/notes/12345/0 - Not send the e-mail
	 - http(s)://your-host/notes/12345/1 - Send the e-mail
 
 **This project just send the notes to the RabbitMQ, to receive the notes in your e-mail the project take-your-note-consumer needs to be running**
