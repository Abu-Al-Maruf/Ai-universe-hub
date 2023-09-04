const getToolsItem = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/ai/tools');
    const data = await response.json();
    const item = data.data.tools;
    console.log(item);

    const boxContainer = document.getElementById('box-container');
    item.forEach(tools => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="border border-[#1111111A] p-6 rounded-2xl">
        <img class="rounded-2xl max-h-48" src="${tools?.image}">

        <div>
            <h2 class="font-semibold text-black text-2xl mt-6">Features</h2>
            <ol class="list-decimal text-[#585858] font-normal text-base ml-5 mt-6">
                <li>${tools?.features[0]}</li>
                <li>${tools?.features[1]}</li>
                <li>${tools?.features[2]}</li>
            </ol>
        </div>
        <hr class="text-[#11111133] mt-6">
        <div>
            <h2 class="font-semibold text-black text-2xl mt-6">${tools?.name}</h2>
            <div class="flex justify-between items-center">
                <div class="flex items-center text-[#585858] font-normal text-base">
                    <img src="./img/calendar.png">
                    <p class="ml-2">${tools?.published_in}</p>
                </div>
                <a href="#" class="bg-[#f5e8e8] hover:bg-[#e6b9b9] p-3 rounded-full">
                    <img src="./img/right-arrow.png" alt="">
                </a>
            </div>
        </div>

    </div>
        
        `
        boxContainer.appendChild(div)
        
    });


}

getToolsItem()