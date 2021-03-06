let string_instanceDetail = [
    ['配置信息', '<p>地域：华南 - 广州<br>' +
    '可用区：可用区A<br>' +
    'CPU:1核<br>' +
    '内存:2GB<br>' +
    '镜像类型:公共操作系统<br>' +
    '操作系统:linux<br>' +
    '操作系统版本:CentOS 7.9 <br>' +
    '安全组:默认安全组<br>' +
    '规格:bcc.c3.c1m2</p>'],
    ['配置信息', '<p>地域：华南 - 广州<br>' +
    '可用区：可用区A<br>' +
    '容量：40GB <br>' +
    '用途：系统盘<br>' +
    '类型：高性能云磁盘</p>'],
    ['配置信息', '<p>地域：华南 - 广州<br>' +
    '带宽峰值:1Mbps</p>'],
    ['配置信息', '<p>地域：全局<br>' +
    '域名：10101.top</p>'],
    ['运维管理面板', '<p>OneinStack<br>' +
    '[LAMP (Linux + Apache+ MySQL/MongoDB + PHP)]</p>' +
    '<h6>Apache</h6>' +
    '<p>版本：2.4<br>工作模式：event</p>' +
    '<h6>PHP版本</h6>' +
    '<p>版本：7.2<br>PHP缓存：OPcache</p>' +
    '<h6>数据库</h6>' +
    '<p>版本：5.7</p>' +
    '<h6>其他组件</h6>' +
    '<p>Pure-FTPd<br>phpMyAdmin<br>redis<br>memcached</p>'],
    ['网站备案/许可证号：', '闽ICP备20002277号-1'],
    ['前端框架', "<p>Bootstrap<br>版本：4.6</p>" +
    '<h6>nodejs包管理工具</h6>' +
    '<p>除核心框架，以下所有组件的调用、更新等部署操作均通过NPM包管理工具管理</p>' +
    '<h6>jQuery</h6>' +
    '<p>版本：3.6.0</p>' +
    '<h6>bootstrap-icons</h6>' +
    '<p>版本：1.4.0</p>' +
    '<h6>vconsole</h6>' +
    '<p>版本：3.4.0</p>']
]
let interface_instanceDetail = [
    ["#instance-server-detail-type", "#instance-server-detail-info"],
    ["#instance-disk-detail-type", "#instance-disk-detail-info"],
    ["#instance-ip-detail-type", "#instance-ip-detail-info"],
    ["#instance-domain-detail-type", "#instance-domain-detail-info"],
    ["#instance-environment-detail-type", "#instance-environment-detail-info"],
    ["#instance-icp-detail-type", "#instance-icp-detail-info"],
    ["#instance-frame-detail-type", "#instance-frame-detail-info"]
]
window.onload = () => {
    for (let i1 = 0; i1 <= interface_instanceDetail.length - 1; i1++) {
        for (let i2 = 0; i2 <= string_instanceDetail[i1].length - 1; i2++) {
            console.debug(i1, i2, interface_instanceDetail.length)
            console.info(document.querySelector(interface_instanceDetail[i1][i2]).innerHTML = string_instanceDetail[i1][i2])
            document.querySelector(interface_instanceDetail[i1][i2]).innerHTML = string_instanceDetail[i1][i2]
        }
    }
}