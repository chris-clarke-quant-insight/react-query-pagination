// Item
// ID
// Title
// Type // Link, Image, Video, Text
// Content
// CreatedAt
// UpdatedAt

const records = [
    {
        id: 1,
        username: 'alice',
        items: [{
            id: '11212123123123',
            title: 'alice one',
            type: 'image', 
            content: '/assets/png/0f16c112-6c33-44ae-a290-f3fc11baaf02.png',
            createdAt: 'today',
            updatedAt: 'now'
        }
        ,{
            id: '72138521863586',
            title: 'alice two',
            type: 'text', 
            content: 'Alice two',
            createdAt: 'today',
            updatedAt: 'now'
        }, 
        {
            id: '72138521863586',
            title: 'alice three',
            type: 'link', 
            content: 'https://www.youtube.com/watch?v=jnctWuP_a6A',
            createdAt: 'today',
            updatedAt: 'now'
        },
        {
            id: '11212123123123',
            title: 'alice four',
            type: 'image', 
            content: 'https://i.ytimg.com/vi/U6wmE5dRsIw/maxresdefault.jpg',
            createdAt: 'today',
            updatedAt: 'now'
        }
        ]
    },
    {
        id: 2,
        username: 'bob',
        items: [{
            id: '8469208460607',
            title: 'Bob one',
            type: 'text', 
            content: 'Bob one content',
            createdAt: 'today',
            updatedAt: 'now'
        }
        , {
            id: '90268216949812',
            title: 'Bob two',
            type: 'text', 
            content: 'Bob content two',
            createdAt: 'today',
            updatedAt: 'now'
        }
        , {
            id: '907123861283',
            title: 'Bob three',
            type: 'text', 
            content: 'Bob three content',
            createdAt: 'today',
            updatedAt: 'now'
        }]
    },
    // {id: 3, username:"oftt",items:["amuq"]}, <-- missing on purpose to test record not found
    {id: 3, username:"doer", items:["vpcy"]},
    {id: 4, username:"hlvs",items:["dgvx"]},
    {id: 5, username:"uipq",items:["dkyg"]},
    {id: 6, username:"xyda",items:["cjba"]},
    {id: 7, username:"heep",items:["nbpq"]},
    {id: 8, username:"dzrn",items:["sksd"]},
    {id: 9, username:"oirx",items:["ygqh"]},
    {id: 10, username:"cdkx",items:["xugh"]},
    {id: 11, username:"mexk",items:["mwfx"]},
    {id: 12, username:"ktsw",items:["hwtu"]},
    {id: 13, username:"auuq",items:["rmry"]},
    {id: 14, username:"asee",items:["gtzq"]},
    {id: 15, username:"wugi",items:["qykr"]},
    {id: 16, username:"pdmt",items:["otlj"]},
    {id: 17, username:"cxjx",items:["psjy"]},
    {id: 18, username:"cgsv",items:["oxkf"]},
    {id: 19, username:"hstl",items:["hyen"]},
    {id: 20, username:"nnft",items:["hdrr"]},
    {id: 21, username:"ahpj",items:["wyad"]},
    {id: 22, username:"vskb",items:["hngz"]},
    {id: 23, username:"tpqr",items:["canj"]},
    {id: 24, username:"gybu",items:["nbeo"]},
    {id: 25, username:"pmgl",items:["izao"]},
    {id: 26, username:"gmqw",items:["lzck"]},
    {id: 27, username:"lzrt",items:["vjji"]},
    {id: 28, username:"plqp",items:["kltg"]},
    {id: 29, username:"rthh",items:["jzgt"]},
    {id: 30, username:"xpvh",items:["vlhl"]},
    {id: 31, username:"lavv",items:["fwqg"]},
    {id: 32, username:"xvul",items:["anxm"]},
    {id: 33, username:"nymt",items:["ajtf"]},
    {id: 34, username:"cdxd",items:["rjpb"]},
    {id: 35, username:"lqmc",items:["eudg"]},
    {id: 36, username:"mgbo",items:["dwga"]},
    {id: 37, username:"ejkd",items:["vcrk"]},
    {id: 38, username:"rimj",items:["jcgr"]},
    {id: 39, username:"naqb",items:["bern"]},
    {id: 40, username:"kgpe",items:["zpdy"]},
    {id: 41, username:"wcfx",items:["tudm"]},
    {id: 42, username:"zneg",items:["biqd"]},
    {id: 43, username:"kdns",items:["goyw"]},
    {id: 44, username:"setl",items:["jyuy"]},
    {id: 45, username:"zemk",items:["afce"]},
    {id: 46, username:"hqrw",items:["mepw"]},
    {id: 47, username:"hhtt",items:["sbfu"]},
    {id: 48, username:"tfts",items:["twop"]},
    {id: 49, username:"tiwg",items:["igsl"]},
    {id: 50, username:"pqlx",items:["woiq"]},
    {id: 51, username:"ssxp",items:["gujk"]},
    {id: 52, username:"xjcm",items:["roar"]},
    {id: 53, username:"ykjp",items:["lhib"]},
    {id: 54, username:"feer",items:["xjmu"]},
    {id: 55, username:"cqpy",items:["sloi"]},
    {id: 56, username:"vfuc",items:["toia"]},
    {id: 57, username:"ebhx",items:["yorc"]},
    {id: 58, username:"zeyg",items:["aujz"]},
    {id: 59, username:"duqn",items:["gxwt"]},
    {id: 60, username:"tnmu",items:["dzss"]},
    {id: 61, username:"ctvg",items:["xuku"]},
    {id: 62, username:"tncw",items:["wlqr"]},
    {id: 63, username:"kuqu",items:["xeqm"]},
    {id: 64, username:"acad",items:["vkmz"]},
    {id: 65, username:"xpao",items:["dakk"]},
    {id: 66, username:"vshu",items:["rosw"]},
    {id: 67, username:"opmi",items:["nebl"]}
];

export default records; // In-memory data store (replace with database interaction)
