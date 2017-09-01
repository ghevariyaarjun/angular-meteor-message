----------------------------
FRONT - END (Root Folder )
----------------------------
npm install -g ionic 
npm install -g cordova
npm install -g meteor-client-bundler
npm install
ionic cordova prepare


----------------------------
SOFTWARE
----------------------------
Java jre
Gradle
Android sdk

----------------------------
BACK - END ( api folder )
----------------------------
npm install

----------------------------
CHANGE SOCKET URL
----------------------------
Open meteor-client.config.json file 
Change socket url in DDP_DEFAULT_CONNECTION_URL variable
          Ex . 
          {
            "runtime": {
              "DDP_DEFAULT_CONNECTION_URL": "http://ec2-34-213-113-105.us-west-2.compute.amazonaws.com:3000"
            },
            "import": [

            ]
          }


----------------------------
CREATE SOCKET URl
----------------------------
npm run meteor-client:bundle

----------------------------
FRONT - END RUN
----------------------------
ionic serve

----------------------------
BACK - END RUN
----------------------------
npm run api

----------------------------
FRONT END BUILD ( IONIC )
----------------------------
ionic cordova platform android
