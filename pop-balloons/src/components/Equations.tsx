

const Equations = () => {

    // generate 2 random numbers
    var type = Math.floor(Math.random() * 4); // addition, subtraction, multiplication, division

    switch (type) {
        // if 1, addition
        case 1:
            var num1 = Math.floor(Math.random() * 100);
            var num2 = Math.floor(Math.random() * 100);
            var answer = num1 + num2;
            var operand = "+"
            break;

        // if 2, subtraction
        case 2:
            var num1 = Math.floor(Math.random() * 100);
            var num2 = Math.floor(Math.random() * 100);
            var answer = num1 - num2;
            var operand = "-"
            break;

        // if 3, multiplication
        case 3:
            var num1 = Math.floor(Math.random() * 20);
            var num2 = Math.floor(Math.random() * 20);
            var answer = num1 * num2;
            var operand = "*"
            break;

        // if 4, division
        case 4:
            var num1 = Math.floor(Math.random() * 10);
            var num2 = Math.floor(Math.random() * 10);
            var answer = num1;
            var operand = "/"
            num1 = num1 * num2;
            break;

        default:
            var num1 = Math.floor(Math.random() * 100);
            var num2 = Math.floor(Math.random() * 100);
            var answer = num1 + num2;
            var operand = "+"
            break;

    }

    // format question as string
    var question = num1 + " " + operand + " " + num2 + " " + "=" + " ?";

    // generate a random answer to confuse
    var rand1 = Math.floor(Math.random() * 100);
    var rand2 = Math.floor(Math.random() * 100);
    var rand3 = Math.floor(Math.random() * 100);

    // return questiom, answer, and 3 random answers
    return [question, answer, rand1, rand2, rand3];



};

export default Equations;