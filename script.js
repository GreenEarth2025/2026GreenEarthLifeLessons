$(document).ready(function() {
    // Array to store diary entries
    let entries = [];

    // Load saved entries from local storage
    if (localStorage.getItem('diaryEntries')) {
        entries = JSON.parse(localStorage.getItem('diaryEntries'));
        displayEntries();
    }

    // Populate age dropdown (15 to 99)
    let select = $('#entryAge');
    for (let i = 15; i <= 99; i++) {
        select.append($('<option>').val(i).text(i));
    }

    // Diary Entry Form Submission
    $('#diaryEntryForm').submit(function(e) {
        e.preventDefault();

        // Get form values
        let age = $('#entryAge').val();
        let title = $('#entryTitle').val();
        let content = $('#entryContent').val();

        // Create new entry object
        let entry = {
            age: age,
            title: title,
            content: content,
            date: new Date().toLocaleString()
        };

        // Add entry to array
        entries.push(entry);

        // Save entries to local storage
        localStorage.setItem('diaryEntries', JSON.stringify(entries));

        // Clear form inputs
        $('#entryAge').val('');
        $('#entryTitle').val('');
        $('#entryContent').val('');

        // Display updated entries
        displayEntries();
    });

    // Display diary entries (sorted by age)
    function displayEntries() {
        // Sort entries by age ascending
        entries.sort((a, b) => a.age - b.age);

        // Clear existing entries
        $('#entryList').empty();

        // Loop through entries array and create list items
        entries.forEach(function(entry) {
            let listItem = $('<li>').addClass('list-group-item');
            let title = $('<h5>').addClass('mb-1').text(entry.title);
            let ageElem = $('<p>').addClass('mb-1').text('Age: ' + entry.age);
            let content = $('<p>').addClass('mb-1').text(entry.content);
            let date = $('<small>').text('Added: ' + entry.date);

            listItem.append(title, ageElem, content, date);
            $('#entryList').append(listItem);
        });
    }
});
