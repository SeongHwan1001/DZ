// input에 숫자를 입력하고 + 버튼을 클릭하면 결과값에 입력한 숫자 만큼 더해지고 input의 값은 없어진다.
// input에 숫자를 입력하고 - 버튼을 클릭하면 결과값에 입력한 숫자 만큼 빼지고 input의 값은 없어진다.
// input에 유효하지 않은 숫자를 입력하고 +, - 버튼을 클릭하면 동작은 무효되고 input의 값은 없어진다.
// undo를 클릭하면 이전 값으로 돌아간다.
// redo를 클릭하면 이후 값으로 되돌린다.
// undo와 redo는 동작이 가능할때만 활성화 상태가 된다.

window.onload = function() {
    var undoButton = document.getElementById('undoButton');
    var plusButton = document.getElementById('plusButton');
    var minusButton = document.getElementById('minusButton');
    var redoButton = document.getElementById('redoButton');

    var text = document.getElementById('text');
    var array = [];
    var index = -1;
    var sum = 0;

    undoButton.onclick = function() {
        index -= 1;

        if (index == -1) {
            sum = 0;
            text.innerHTML = sum;
        } else {
            sum = array[index];
            text.innerHTML = sum;
        }

        buttonState();
    };

    plusButton.onclick = function() {
        var inputText = document.getElementById('inputText');
        var inputTextNum = Number(inputText.value);

        if (!inputTextNum) {
            if (isNaN(inputTextNum)) alert('숫자만 입력가능합니다.');
            else alert('값을 입력해주세요.');
            inputText.value = '';
        } else {
            if (index != array.length - 1) {
                array.splice(index + 1, array.length - index - 1);
            }
            if (index == -1) sum += inputTextNum;
            else sum = array[index] + inputTextNum;

            index += 1;
            array[index] = sum;

            text.innerHTML = sum;
            inputText.value = '';
            buttonState();
        }
    };

    minusButton.onclick = function() {
        var inputText = document.getElementById('inputText');
        var inputTextNum = Number(inputText.value);

        if (!inputTextNum) {
            if (isNaN(inputTextNum)) alert('숫자만 입력가능합니다.');
            else alert('값을 입력해주세요.');
            inputText.value = '';
        } else {
            if (index != array.length - 1) {
                array.splice(index + 1, array.length - index - 1);
            }

            if (index == -1) sum -= inputTextNum;
            else sum = array[index] - inputTextNum;

            index += 1;
            array[index] = sum;

            text.innerHTML = sum;
            inputText.value = '';
            buttonState();
        }
    };

    redoButton.onclick = function() {
        index += 1;

        if (index == -1) text.innerHTML = 0;
        else text.innerHTML = array[index];

        buttonState();
    };

    function buttonState() {
        if (index > -1) {
            undoButton.disabled = false;
        } else {
            undoButton.disabled = 'disabled';
        }

        // index가 -1부터 시작해서 계산했기 때문에 총 length에서 -1
        if (index < array.length - 1) {
            redoButton.disabled = false;
        } else {
            redoButton.disabled = 'disabled';
        }
    }
};
