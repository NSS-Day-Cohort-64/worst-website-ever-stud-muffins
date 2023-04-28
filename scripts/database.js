 
            const database = {
    locations: 
    [
        {
            id: 1,
            location: "USA",
            image: "https://i.ebayimg.com/images/g/P-sAAOSwvydkDMFy/s-l500.jpg"
        },
        {
            id: 2,
            location: "The Sahara Desert",
            image: "https://i.etsystatic.com/20827068/r/il/061e8e/2011578977/il_500x500.2011578977_ywd2.jpg"
        },
        {
            id: 3,
            location: "Antartica",
            image: "https://img.redro.pl/plakaty/yeti-winter-in-the-forest-3d-illustration-400-181352503.jpg"
        },
        {
            id: 4,
            location: "On a brisk walk",
            image: "https://cdn.theatlantic.com/thumbor/QZygzYtXkIilglP1VwFnIUEAbPY=/0x156:3000x1844/1600x900/media/img/mt/2016/10/AP_83613422320/original.jpg"
        },
        {
            id: 5,
            location: "Doing his taxes online  with TurboTax",
            image: "https://media.istockphoto.com/id/137887930/photo/bigfoot-on-laptop.jpg?s=612x612&w=0&k=20&c=BfrUGZ0yx4glKceV3_OTeHk_2cHJOpw7XPvLOfVz4h8="
        },
        {
            id: 6,
            location: "On a zoom call with Coach Steve to catch up on the latest minor league pickleball updates",
            image: "https://media.istockphoto.com/id/1227246876/photo/sasquatch-and-gorilla-on-a-web-chat.jpg?s=612x612&w=0&k=20&c=6TKJeKei4mS3T8TLvqUM3KK5Rt8tzPNDU2Bd4U-H2dE="
        },
        {
            id: 7,
            location: "Taming his trusty Steed",
            image: "https://i.pinimg.com/564x/e7/95/be/e795be2d910382588bf9529130e07ec9.jpg"
        },
        {
            id: 8,
            location: "Digesting the intracacies of life with gentleman and scholar Ronald McDonald, founding father of the McRib and ginger children everywhere",
            image: "https://pbs.twimg.com/media/DUGCmsiVQAAvKqi.jpg"
        },
        {
            id: 9,
            location: "Posing for playboy after a fun night of going on a bender",
            image: "https://ih1.redbubble.net/image.1540385108.7194/poster,504x498,f8f8f8-pad,600x600,f8f8f8.jpg"
        },
        {
            id: 10,
            location: "Emptying the tank after having an extra large fizzy soda",
            image: "https://i.pinimg.com/originals/f3/a1/59/f3a159f234a439f57b680a73439d3110.jpg"
        },
        {
            id: 11,
            location: "Riding the hog at a respectable speed limit to set a good example for today's youth",
            image: "https://i.chzbgr.com/full/9402205440/h0E32403C/a-very-low-resolution-shaky-camera-to-record-bigfoot-above-a-pic-of-a-bigfoot-riding-a-motorcycle"
        },
        {
            id: 12,
            location: "Tending to his garden like a badass",
            image: "https://media.istockphoto.com/id/152157860/photo/bigfoot-gardening.jpg?s=612x612&w=0&k=20&c=srljoYaZGJj1-s2z4RDuTG3g8AJQu2xO3tpVRYepIlU="
        },
        {
            id: 13,
            location: "Not even bigfoot",
            image: "https://i.ebayimg.com/images/g/V9wAAOSw~e5ZU~Ls/s-l500.jpg"
        },
    ],
        bruthrrs: [
        {
            name: "Bruthrr Foot",
            image: "https://townsquare.media/site/33/files/2019/11/RS2574_152533219.jpg?w=630&q=75",
            description: "Somewhere in Ohio?"
        },
        {
            name: "Sad day for Bruthrr Foot?",
            image: "https://files.slack.com/files-tmb/T03F2SDTJ-F0565DAGM0Q-7abb2790f2/image_720.png",
            description: "Bruthrrr Foot invited his friends Nessy and Mothman to his birthday, but no one showed up",
        },


        {
            name: "Sistter Nessy",
            image: "https://i.pinimg.com/736x/0d/11/7d/0d117dbe9cec19fad5d5e8ec44dd5b1d.jpg",
            description: "Nessy on her afternoon walk",

        },


        {
            name: "Bruthrr Moth",
            image: "https://bloximages.chicago2.vip.townnews.com/wvnews.com/content/tncms/assets/v3/editorial/f/17/f175c628-3224-11ed-ad77-1faa845290a8/631e67b9a2c1f.image.jpg?resize=753%2C500",
            description: "Bruthrr Moth and Bruthrrr Foot touring KY go friedddd chicken!"
        },
    

        {
            name: "约翰塞纳",
            image: "https://us-tuna-sounds-images.voicemod.net/c22227f4-9e2f-40a4-98e5-684be2195e9c-1669996963917.png",
            description: "President of China, John Cena"
        },
    ],
}
export const locations = () => {
    return database.locations.map(locations => ({ ...locations }))
}