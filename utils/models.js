const models = [
    {"id":"bob","value":"ucas","url":"/assets/png/99427025-d3c7-11ee-b658-0293c7929d8d.png"},
    {"id":"alice","value":"kcby","url":"/assets/png/05d171f7-1eec-4700-b182-622ec0e7b2ea.png"},
    {"id":"oftt","value":"amuq","url":"/assets/png/0f16c112-6c33-44ae-a290-f3fc11baaf02.png"},
    {"id":"doer","value":"vpcy","url":"/assets/png/1f4799c8-28bf-4ef4-a40c-fcef6437fdf2.png"},
    {"id":"hlvs","value":"dgvx","url":"/assets/png/22e252d5-f286-4628-bf09-d6746917faea.png"},
    {"id":"uipq","value":"dkyg","url":"/assets/png/2de048d8-7441-4958-9697-051c69aa6c09.png"},
    {"id":"xyda","value":"cjba","url":"/assets/png/2f769164-3f99-4b05-a5ce-5f9c1865b62f.png"},
    {"id":"heep","value":"nbpq","url":"/assets/png/33840cb2-d032-4c33-a3cd-4e40eb7e9764.png"},
    {"id":"dzrn","value":"sksd","url":"/assets/png/39402981-2caa-4889-a8e3-61ef42f2fc81.png"},
    {"id":"oirx","value":"ygqh","url":"/assets/png/41d8bfe8-ef3c-4d21-b741-9a0d04226586.png"},
    {"id":"cdkx","value":"xugh","url":"/assets/png/4ac6e871-2c5e-4dae-9466-a2bd445fb2bd.png"},
    {"id":"mexk","value":"mwfx","url":"/assets/png/5273400c-5515-424d-911f-aac641f480a4.png"},
    {"id":"ktsw","value":"hwtu","url":"/assets/png/5775e69a-be4b-4ff2-8da8-d4fd2bb8dff6.png"},
    {"id":"auuq","value":"rmry","url":"/assets/png/6b030787-8689-4689-950f-5da459568222.png"},
    {"id":"asee","value":"gtzq","url":"/assets/png/6d8e8bf5-f050-4b88-8960-61b8523c0e74.png"},
    {"id":"wugi","value":"qykr","url":"/assets/png/7516811f-328c-44c7-983d-126c159f23b9.png"},
    {"id":"pdmt","value":"otlj","url":"/assets/png/7c209ec7-770c-4019-8a66-d2c34d2d6c75.png"},
    {"id":"cxjx","value":"psjy","url":"/assets/png/84b74ce1-88a6-48c4-9477-91e3907dd7ea.png"},
    {"id":"cgsv","value":"oxkf","url":"/assets/png/8bbd9b82-d010-4e88-8c6c-66e5f6f34bee.png"},
    {"id":"hstl","value":"hyen","url":"/assets/png/92b5baba-3a56-478f-ae0a-79b74606b8c0.png"},
    {"id":"nnft","value":"hdrr","url":"/assets/png/9940c804-d3c7-11ee-b658-0293c7929d8d.png"},
    {"id":"ahpj","value":"wyad","url":"/assets/png/99412307-d3c7-11ee-b658-0293c7929d8d.png"},
    {"id":"vskb","value":"hngz","url":"/assets/png/9941b48d-d3c7-11ee-b658-0293c7929d8d.png"},
    {"id":"tpqr","value":"canj","url":"/assets/png/9941d78f-d3c7-11ee-b658-0293c7929d8d.png"},
    {"id":"gybu","value":"nbeo","url":"/assets/png/99423883-d3c7-11ee-b658-0293c7929d8d.png"},
    {"id":"pmgl","value":"izao","url":"/assets/png/9942485f-d3c7-11ee-b658-0293c7929d8d.png"},
    {"id":"gmqw","value":"lzck","url":"/assets/png/99427025-d3c7-11ee-b658-0293c7929d8d.png"},
    {"id":"lzrt","value":"vjji","url":"/assets/png/9942a60f-d3c7-11ee-b658-0293c7929d8d.png"},
    {"id":"plqp","value":"kltg","url":"/assets/png/9942f690-d3c7-11ee-b658-0293c7929d8d.png"},
    {"id":"rthh","value":"jzgt","url":"/assets/png/9943747c-d3c7-11ee-b658-0293c7929d8d.png"},
    {"id":"xpvh","value":"vlhl","url":"/assets/png/994389c5-d3c7-11ee-b658-0293c7929d8d.png"},
    {"id":"lavv","value":"fwqg","url":"/assets/png/9943b714-d3c7-11ee-b658-0293c7929d8d.png"},
    {"id":"xvul","value":"anxm","url":"/assets/png/994445a6-d3c7-11ee-b658-0293c7929d8d.png"},
    {"id":"nymt","value":"ajtf","url":"/assets/png/99445d76-d3c7-11ee-b658-0293c7929d8d.png"},
    {"id":"cdxd","value":"rjpb","url":"/assets/png/99446a07-d3c7-11ee-b658-0293c7929d8d.png"},
    {"id":"lqmc","value":"eudg","url":"/assets/png/99447582-d3c7-11ee-b658-0293c7929d8d.png"},
    {"id":"mgbo","value":"dwga","url":"/assets/png/9944f62d-d3c7-11ee-b658-0293c7929d8d.png"},
    {"id":"ejkd","value":"vcrk","url":"/assets/png/9945408f-d3c7-11ee-b658-0293c7929d8d.png"},
    {"id":"rimj","value":"jcgr","url":"/assets/png/9945e1ff-d3c7-11ee-b658-0293c7929d8d.png"},
    {"id":"naqb","value":"bern","url":"/assets/png/99469973-d3c7-11ee-b658-0293c7929d8d.png"},
    {"id":"kgpe","value":"zpdy","url":"/assets/png/9947682f-d3c7-11ee-b658-0293c7929d8d.png"},
    {"id":"wcfx","value":"tudm","url":"/assets/png/994974b7-d3c7-11ee-b658-0293c7929d8d.png"},
    {"id":"zneg","value":"biqd","url":"/assets/png/abdc944b-1c33-469b-849c-073e651482b3.png"},
    {"id":"kdns","value":"goyw","url":"/assets/png/b19a04fa-41d3-4027-8a07-db23bafe3630.png"},
    {"id":"setl","value":"jyuy","url":"/assets/png/c2db078e-5808-4bc3-af40-94b91b0ee5f3.png"},
    {"id":"zemk","value":"afce","url":"/assets/png/c42f5619-1cc3-450e-ac9b-5e39c0f0f03d.png"},
    {"id":"hqrw","value":"mepw","url":"/assets/png/c80ccc22-4c24-48d3-aa37-72e9793fde4d.png"},
    {"id":"hhtt","value":"sbfu","url":"/assets/png/d99a43fe-6113-420a-a611-084bb4449ad0.png"},
    {"id":"tfts","value":"twop","url":"/assets/png/e97f3efa-f263-4601-a151-9c3037d6986e.png"},
    {"id":"tiwg","value":"igsl","url":"/assets/png/ff48d0a6-603c-4a80-926f-f1192617fed6.png"},
    {"id":"pqlx","value":"woiq","url":"/assets/png/0f16c112-6c33-44ae-a290-f3fc11baaf02.png"},
    {"id":"ssxp","value":"gujk","url":"/assets/png/22e252d5-f286-4628-bf09-d6746917faea.png"},
    {"id":"xjcm","value":"roar","url":"/assets/png/33840cb2-d032-4c33-a3cd-4e40eb7e9764.png"},
    {"id":"ykjp","value":"lhib","url":"/assets/png/ff48d0a6-603c-4a80-926f-f1192617fed6.png"},
    {"id":"feer","value":"xjmu","url":"/assets/png/99447582-d3c7-11ee-b658-0293c7929d8d.png"},
    {"id":"cqpy","value":"sloi","url":"/assets/png/994389c5-d3c7-11ee-b658-0293c7929d8d.png"},
    {"id":"vfuc","value":"toia","url":"/assets/png/4ac6e871-2c5e-4dae-9466-a2bd445fb2bd.png"},
    {"id":"ebhx","value":"yorc","url":"/assets/png/e97f3efa-f263-4601-a151-9c3037d6986e.png"},
    {"id":"zeyg","value":"aujz","url":"/assets/png/e97f3efa-f263-4601-a151-9c3037d6986e.png"},
    {"id":"duqn","value":"gxwt","url":"/assets/png/99469973-d3c7-11ee-b658-0293c7929d8d.png"},
    {"id":"tnmu","value":"dzss","url":"/assets/png/9942f690-d3c7-11ee-b658-0293c7929d8d.png"},
    {"id":"ctvg","value":"xuku","url":"/assets/png/9943b714-d3c7-11ee-b658-0293c7929d8d.png"},
    {"id":"tncw","value":"wlqr","url":"/assets/png/abdc944b-1c33-469b-849c-073e651482b3.png"},
    {"id":"kuqu","value":"xeqm","url":"/assets/png/9943747c-d3c7-11ee-b658-0293c7929d8d.png"},
    {"id":"acad","value":"vkmz","url":"/assets/png/99412307-d3c7-11ee-b658-0293c7929d8d.png"},
    {"id":"xpao","value":"dakk","url":"/assets/png/e97f3efa-f263-4601-a151-9c3037d6986e.png"},
    {"id":"vshu","value":"rosw","url":"/assets/png/99469973-d3c7-11ee-b658-0293c7929d8d.png"},
    {"id":"opmi","value":"nebl","url":"/assets/png/22e252d5-f286-4628-bf09-d6746917faea.png"}];
    
export default models;