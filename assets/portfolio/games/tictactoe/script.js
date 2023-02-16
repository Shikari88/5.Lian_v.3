"use strict";

//получили доступ к каждому полю
let fields = document.querySelectorAll("#fields tr td");
let resultDesc = document.querySelector("#resultDesc");

console.log(fields.length);

//добавить возможность в каждое поле ставить крестик


function start(fields){
	let count = 0;
	for(let field of fields) {
		field.addEventListener('click', function step() {
			if (count % 2 === 0) {
				this.textContent = "X";
                this.style.borderColor = "green";
			} else {
				this.textContent = "O";
				this.style.borderColor = "red";

			}
			// this.textContent = ['X', 'O'][count % 2];
			this.removeEventListener('click', step);

            if(isVictory(fields)) {
                // alert("Победу одержал игрок - " + this.textContent + "\n" + "Нажмите 'OK'" + "\n" + "Новая игра начнётся через 3 секунды");
                resultDesc.textContent = "Победу одержал игрок - " + this.textContent +  ". Новая игра начнётся через 10 секунд";
                setTimeout(() => window.location.reload(), 10000);
            } else if (count === 8) {
				resultDesc.textContent = "У вас ничья, господа!" + "\n" + " Перезагрузите странцу для начала игры";
				// alert("У вас ничья, господа!" + "\n" + "Перезагрузите странцу для начала игры");
			}
			count++;
		});	
	}
}




function isVictory(fields) {
	let combs = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	for (let comb of combs) {
		if (
			fields[comb[0]].textContent === fields[comb[1]].textContent &&
			fields[comb[1]].textContent === fields[comb[2]].textContent &&
			fields[comb[0]].textContent !== ''
		) {
			return true;
		}	
	}
	return false;	
}

start(fields);

