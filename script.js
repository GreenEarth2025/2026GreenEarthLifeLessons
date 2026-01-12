$(document).ready(function() {
    let entries = [];

    // Load from localStorage
    if (localStorage.getItem('diaryEntries')) {
        entries = JSON.parse(localStorage.getItem('diaryEntries'));
        displayEntries();
    }

    // Populate age dropdown (15-99)
    const ageSelect = $('#entryAge');
    for (let i = 15; i <= 99; i++) {
        ageSelect.append(`<option value="${i}">${i}</option>`);
    }

    // Example lessons (title + content + suggested age range)
    const examples = [
        { age: 18, title: "Failure is the best teacher", content: "In my late teens I failed my first big exam. It hurt, but it taught me to study smarter, not just harder. Embrace setbacks — they build resilience." },
        { age: 22, title: "Time is more valuable than money", content: "Early 20s: Chasing overtime for cash, but missed family moments. Learned money comes back — time doesn't." },
        { age: 30, title: "Choose relationships wisely", content: "By 30, realized toxic people drain you. Surround yourself with those who lift you up." },
        { age: 35, title: "Health is true wealth", content: "Mid-30s health scare showed me: No amount of success matters if your body fails you. Prioritize sleep, movement, and good food." },
        { age: 45, title: "Let go of what you can't control", content: "In my 40s, stopped worrying about others' opinions. Focus on your circle of influence — peace followed." },
        { age: 55, title: "Gratitude changes everything", content: "Mid-50s: Daily gratitude practice turned average days into meaningful ones." },
        { age: 65, title: "Forgiveness frees you", content: "Late 60s: Holding grudges only hurts you. Forgive — not for them, but for your peace." },
        { age: 75, title: "Legacy is in stories, not stuff", content: "At 75, realized kids remember your kindness & lessons, not your possessions." },
        { age: 85, title: "Love deeply, regret nothing", content: "Near 90: The biggest regrets are chances not taken in love & kindness." },
        { age: 99, title: "Life is short — laugh often", content: "Almost 100: Humor & light-heartedness kept me young at heart through everything." }
    ];

    // Populate example dropdown
    const exampleSelect = $('#exampleSelect');
    examples.forEach(ex => {
        exampleSelect.append(`<option value="${ex.age}" data-title="${ex.title}" data-content="${ex.content}">${ex.age} — ${ex.title}</option>`);
    });

    // Auto-fill when example selected
    exampleSelect.on('change', function() {
        const selected = $(this).find('option:selected');
        const age = selected.val();
        const title = selected.data('title');
        const content = selected.data('content');

        if (age) {
            $('#entryAge').val(age);
            $('#entryTitle').val(title);
            $('#entryContent').val(content);
        }
    });

    // Form submit
    $('#diaryEntryForm').submit(function(e) {
        e.preventDefault();

        const age = $('#entryAge').val();
        const title = $('#entryTitle').val().trim();
        const content = $('#entryContent').val().trim();

        if (!age || !title || !content) return;

        const entry = {
            age: parseInt(age),
            title,
            content,
            date: new Date().toLocaleString()
        };

        entries.push(entry);
        localStorage.setItem('diaryEntries', JSON.stringify(entries));

        // Clear form
        $('#entryAge').val('');
        $('#exampleSelect').val('');
        $('#entryTitle').val('');
        $('#entryContent').val('');

        displayEntries();
    });

    // Display sorted by age
    function displayEntries() {
        entries.sort((a, b) => a.age - b.age);
        $('#entryList').empty();

        entries.forEach(entry => {
            const item = $(`
                <li class="list-group-item">
                    <h5>${entry.title}</h5>
                    <p><strong>Age:</strong> ${entry.age}</p>
                    <p>${entry.content}</p>
                    <small class="text-muted">Added: ${entry.date}</small>
                </li>
            `);
            $('#entryList').append(item);
        });
    }
});
