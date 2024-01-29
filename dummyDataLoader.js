var json = {
    "threads": [
        {
            "Started_By": "jatin_yadav",
            "Title": "Can you provide with another contact no as the one provided is not working",
            "Date_Posted": "20-01-2024",
            "Replies": 34
        },
        {
            "Started_By": "aditya_gokhale",
            "Title": "Alcohol makes me feel better",
            "Date_Posted": "22-01-2024",
            "Replies": 4
        },
        {
            "Started_By": "samiran_kulkarni",
            "Title": "How can I control or completely leave my alcohol addiction??",
            "Date_Posted": "23-01-2024",
            "Replies": 17
        }
    ]
};

var count = Object.keys(json.threads).length;
var tableContent = "";

for(i = 0; i < count; i++) {
    tableContent = tableContent + "<tr><td class='two columns'>" + json.threads[i].Started_By +
    "</td><td class='six columns'>" + json.threads[i].Title +
    "</td><td class='two columns'>" + json.threads[i].Date_Posted +
    "</td><td class='two columns'>" + json.threads[i].Replies +
    "</td></tr>"
}

document.getElementById("tableContent").innerHTML = tableContent;
