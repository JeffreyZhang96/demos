const { User, Blog } = require("./model");

!(async function() {
  //创建用户
  const zhangzf = await User.create({
    userName: "zhangzf",
    password: "1123",
    nickName: "zzf"
  });
  //insert into users (...) values (...)
  console.log("zhangzf:", zhangzf.dataValues);
  const zhangzfId = zhangzf.dataValues.id;

  const chenjl = await User.create({
    userName: "chenjl",
    password: "1123",
    nickName: "cjl"
  });
  console.log("chenjl:", chenjl.dataValues);
  const chenjlId = chenjl.dataValues.id;
  
  //创建微博
  const blog1 = await Blog.create({
    title: "love letter",
    content: "I love you",
    userId: zhangzfId
  });
  console.log("blog1", blog1.dataValues);

  const blog2 = await Blog.create({
    title: "love letter",
    content: "I love you too",
    userId: chenjlId
  });
  console.log("blog2", blog2.dataValues);
})();
