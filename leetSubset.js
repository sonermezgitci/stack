var subsets = function (nums) {
    let answer = [];
    let ip = [nums];
    let op = []
    FindSunsets(nums, op)
    function FindSunsets(ip, op) {
        ip = [...ip]
        if (ip.length == 0) {
            answer.push(op)
            return
        }
        let op1 = [...op];
        let op2 = [...op];
        op2.push(ip[0])
        ip.shift();
        FindSunsets(ip, op1)
        FindSunsets(ip, op2);
        return
    }
    return answer
};