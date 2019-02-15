
let btn = document.querySelector('button');
let input = document.querySelector('input[type=\'text\']');
btn.addEventListener('click', addTask);
let numberOfItems = 0;
let delBtn;
function addTask(e){
	e.preventDefault();
	let ul = document.querySelector('ul');
	let li = document.createElement('li');
	let textNode =  document.createTextNode(input.value);
	if(input.value === ''){
		alert('Please the task');
	}else{
		delBtn = document.createElement('button');
		let btnValue = document.createTextNode('Delete Task');
		delBtn.append(btnValue);
		li.append(input.value);
		li.append(delBtn);
		ul.append(li);
		input.value = '';
		numberOfItems++;
		document.querySelector('.numOfItems').innerHTML = numberOfItems;
		delBtn.classList = 'btn btn-danger';
		
		let listBtn = document.querySelectorAll('button.btn');

		listBtn.forEach(btn => {
			btn.onclick = function(){
				btn.parentNode.classList = 'hide';
				numberOfItems--;
				document.querySelector('.numOfItems').innerHTML = numberOfItems;
			}
		})
	}
}
