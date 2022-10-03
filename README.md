# Taskify
If you would like to see the app running in production [click here](https://taskify.dylanplayer.xyz)

## Quick Start
This project requires you to have have Goolge OAuth2 setup. If you are just attempting to run the project without Google Sign In you can skip the first step.

This project uses Google Sign In for auth so in order for sign in to work properly you will need to run `EDITOR=vim rails credentials:edit` and edit your credentials.yml to look like this
```yml
google_sign_in:
    client_id: # Your google client id
    client_secret: # Your google client secret

secret_key_base: # This will be automatically generated
```

Make sure Docker compose v2 is installed
```bash
docker compose version
```

Start docker compose
```bash
docker compose up
```
