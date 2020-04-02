const { User } = require("./model");

!(async function() {
  const updateRes = await User.update(
    { nickName: "jeffreyzhang" },
    { where: { userName: "zhangzf" } }
  );
  console.log("updateRes", updateRes[0] > 0);
})();
