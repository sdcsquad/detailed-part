# Zillow Listing Details Read Me
>Body contents for each Zillow listing

It contains home address, price, features and other pertinent details.

(reference page)
https://www.zillow.com/homedetails/300-State-Route-28-Crystal-Bay-NV-89402/94715841_zpid/?fullpage=true  

# Repo Instructions
* npm install ( install node_modules)
* npm run react-dev ( run webpack )
* npm run server-dev ( run node server : 8080 )
* npm run seeding ( seed 100 house information to database)
* npm run sass-comp ( complile all scss file to one css file )
* npm test ( jest-enzyme test )


# API Routes

|     Method    |          Endpoint          |                     Description                     |
| ------------- | -------------------------  | ----------------------------------------------------|
|      Get      | /api/homes/:homeIdentifier | get all the detailed information on a specific home |
|               |                            | listing, idenfied by listing ID or name             |
|      Post     |        /api/homes/         | add a home listing                                  |
|      Put      | /api/homes/:homeIdentifier | replace a home listing's details                    |
|     Patch     | /api/homes/:homeIdentifier | update a home listing's details                     |
|     Delete    | /api/homes/:homeIdentifier | delete a home listing's details                     |
