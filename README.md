<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Life Lessons Diary</title>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <!-- Custom CSS -->
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Header Section -->
    <header class="bg-dark text-white text-center p-4">
        <h1>My Life Lessons Diary</h1>
        <p>Record lessons learned from ages 15 to 99 to pass on to younger generations.</p>
    </header>

    <!-- Diary Entry Form -->
    <section id="diary-entry" class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <h2>Add a New Life Lesson</h2>
                <form id="diaryEntryForm">
                    <div class="form-group">
                        <label for="entryAge">Age When Learned:</label>
                        <select class="form-control" id="entryAge" required>
                            <option value="">Select Age</option>
                            <!-- Ages 15-99 will be populated via JS -->
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="entryTitle">Title:</label>
                        <input type="text" class="form-control" id="entryTitle" placeholder="Enter title" required>
                    </div>
                    <div class="form-group">
                        <label for="entryContent">Lesson:</label>
                        <textarea class="form-control" id="entryContent" placeholder="Enter the life lesson" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary w-100">Save Lesson</button>
                </form>
            </div>
        </div>
    </section>

    <!-- Diary Entries -->
    <section id="diary-entries" class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <h2>My Life Lessons</h2>
                <ul id="entryList" class="list-group">
                    <!-- Lessons will be dynamically added here -->
                </ul>
            </div>
        </div>
    </section>

    <!-- Bootstrap & jQuery JS -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="script.js"></script>
</body>
</html>
