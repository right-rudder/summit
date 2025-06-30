export const andrewVideo = {
    title: "Meet Andrew",
    description: "Learn how Andrew transitioned from a 31-year career in public service to his passion for aviation. With a unique background as a firefighter, paramedic, and police officer, Andrew brings over three decades of life experience to his role as a flight instructor. Andrew shares the exciting benefits of becoming a pilot, including the ability to travel and explore new destinations.",
    videoId: "HkUJ5JOp_u4",
};

export const colbyVideo = {
    title: "Meet Colby",
    description: "Meet Colby a dedicated student at Summit Flight Academy, located at Lee’s Summit Airport (KLXT) in Lee’s Summit, Missouri. Inspired by childhood trips to airshows with his dad, Colby turned his passion for flying into reality by pursuing his pilot’s license at Summit. Whether you’re aiming for a career in aviation or just flying for fun, Summit Flight Academy offers programs tailored to your goals.",
    videoId: "35ycPLJl-v0",
};

export const ianVideo = {
    title: "Meet Ian",
    description: "Meet Ian Goinging, a passionate Certified Flight Instructor (CFI) at Summit Flight Academy, located at Lee’s Summit Airport (KLXT) in Lee’s Summit, Missouri. With over a decade of flying experience and nearly two years of instructing at Summit, Ian is dedicated to helping students transform their dreams of flying into reality.",
    videoId: "Wv-7yQ70Q1w",
};

export const katiaVideo = {
    title: "Meet Katia",
    description: "Meet Katia Van Horn, a passionate Certified Flight Instructor (CFI) at Summit Flight Academy. With nearly two years of instructing experience and a flying journey that started at the age of 16, Katia brings a wealth of knowledge and enthusiasm to help students achieve their aviation goals.",
    videoId: "hyz-h0xRsD8",
};

export const jamieVideo = {
    title: "Meet Jamie",
    description: "Meet Jamie, the friendly admin at Summit Flight Academy, located at Lee's Summit Airport (KLXT) in Lee's Summit, Missouri. Jamie is here to help you with any questions you may have about starting your aviation journey, from scheduling a discovery flight to connecting you with experienced flight instructors.",
    videoId: "4U0UEYHOPgo",
};

export const joshVideo = {
    title: "Meet Josh",
    description: "Meet Josh, one of the newest flight instructors at Summit Flight Academy, where passion for aviation meets a supportive, family-like atmosphere. Located at Lee’s Summit Airport (KLXT), Summit Flight Academy is dedicated to helping students achieve their aviation dreams, whether it’s flying for fun or pursuing a professional career.",
    videoId: "IQJgXZ1KgKU",
};

export const loganVideo = {
    title: "Meet Logan",
    description: "Meet Logan, a passionate student at Summit Flight Academy, who turned his dream of flying into reality. Starting his training in July 2023, Logan earned his Private Pilot Certificate in just seven months and is now working toward his instrument rating. His ultimate goal? To become an aerospace engineer or airline pilot.",
    videoId: "J2IArZuvtAs",
};

export const youtubeVideos = [ andrewVideo, colbyVideo, ianVideo, katiaVideo, jamieVideo, joshVideo, loganVideo ];

export const randomVideo = () => youtubeVideos[Math.floor(Math.random() * youtubeVideos.length)];