const { Client, Communicator, FriendStatus } = require('fortnite-basic-api');
const fs = require('fs');

const contents = fs.readFileSync('./settings.json');

const jsoncontent = JSON.parse(contents)
//Creation of the client
const client = new Client({
    email: jsoncontent.email,
    password: jsoncontent.password,
    launcherToken: 'MzRhMDJjZjhmNDQxNGUyOWIxNTkyMTg3NmRhMzZmOWE6ZGFhZmJjY2M3Mzc3NDUwMzlkZmZlNTNkOTRmYzc2Y2Y=',
    fortniteToken: 'ZWM2ODRiOGM2ODdmNDc5ZmFkZWEzY2IyYWQ4M2Y1YzY6ZTFmMzFjMjExZjI4NDEzMTg2MjYyZDM3YTEzZmM4NGQ=',
  });


//Creation of Communicator

const communicator = new Communicator(client);

(async () => {

    console.log(await client.login());

    communicator.events.on('session:started', async () => {
        console.log('XMPP Client is fully connected');
        console.log(await communicator.friendship.getIncomingFriendRequests()); // incoming
      });

    communicator.events.on('friend:request', async ()=> {
        if (friendrequest.FriendStatus === FriendStatus.INCOMING) {
            console.log(friendrequest, await friendrequest.accept())
        }
    })
    communicator.events.on('friend:added', async (friend) => {
        console.log(`You're now friend with: ${friend.accountId}`);
      });

  // Then connect it
  console.log(await communicator.connect());
})();