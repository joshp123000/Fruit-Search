const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const suggestionsResults = document.querySelector('.suggestions')
const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	
	
	let results = fruit.filter(element => element.toLowerCase().includes(str.toLowerCase()))
	
	showSuggestions(results)
	return results;
}

function searchHandler(e) {
	let inputVal = input.value
	if(inputVal.trim()===""){
		suggestionsResults.classList.remove('has-suggestions')
		suggestionsResults.style.display = 'none'
		suggestions.innerHTML=""
	}
	else{
	search(inputVal)
	}
	
}

function showSuggestions(results, inputVal) {
	suggestions.innerHTML= ""
	
	results.forEach(element => {
		let child = document.createElement('li')
		child.textContent = element
		suggestions.appendChild(child)
		})

		if(results.length > 0){
			suggestionsResults.classList.add('has-suggestions')
			suggestionsResults.style.display = 'block'
		}
		else{
			suggestionsResults.classList.remove('has-suggestions')
			suggestionsResults.style.display = 'none'
		}
	}
	


function useSuggestion(e) {
	if(e.target.tagName ==='LI'){
		input.value = e.target.textContent
		suggestionsResults.classList.remove('has-suggestions')
		suggestionsResults.style.display = 'none'
		suggestions.innerHTML = ""
	}
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);