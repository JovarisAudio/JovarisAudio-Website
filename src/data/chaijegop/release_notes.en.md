Release date: November 17, 2026\
Korean: https://chaijegop.glossystingray1.chatgpt.site/\
English: https://chaijegop.glossystingray1.chatgpt.site/en

## About this release

Chai Jegop is a personal workspace for music practice and production work. This public release makes the sample workspace available without sign-in, while signed-in users can manage weekly goals, daily tasks, practice logs, Logic projects, Pro Tools mixing sessions, and weekly reviews in one place.

## What changed

### Public samples and private records

- Four practice sessions recorded by the creator in November 2026 are available as public samples.
- Every public record is marked with a `Sample` badge.
- Visitors can view the sample dashboard, dated logs, and weekly review without signing in.
- A signed-in user's records stay separate from the public samples and are loaded and edited only in that account's personal workspace.

### Korean and English interfaces

- The root page is Korean and `/en` provides the English interface.
- The dashboard, editors, templates, weekly review, and public samples are available in both languages.
- Switching languages keeps the same personal records for the signed-in account.
- User-entered titles and notes are preserved as written and are not translated automatically.

### Reworked dashboard

- Restored the purple My Practice hero and weekly dashboard.
- Shows weekly practice time, average success rate, completed goals, and active projects at a glance.
- Weekly goals, today's tasks, today's logs, progress, project status, recurring blockers, and recent records are available on the same screen.

### Balanced practice categories

- Piano, rhythm, arranging, transcription, guitar, sight-singing, harmony, vocal, and bass are treated as equal recordable categories.
- Piano defaults focus on practical current work such as a four-bar melody, subdivision, transcription, and hand coordination instead of conservatory-level jazz exercises.
- Practice category and workspace location are separate, so the same transcription can be identified as Logic Practice or Logic Projects.

### Sight-singing from unison to octave

Practice each interval in order from unison (`Do–Do`) to octave (`Do–High Do`), then sing a combined exercise with repeated notes and changing intervals. The second uses `Do–Re · Re–Mi` and the third uses `Do–Mi · Re–Fa · Mi–Sol`. There are nine templates in total. The difficulty levels are play first and sing back, play and sing together, and sing first and check on the keyboard. View log counts and average success rates by exercise and difficulty.

### Separate Logic and Pro Tools workflows

- `Logic Practice`: exercises, transcription, rhythm work, and short recordings
- `Logic Projects`: arranging and production projects
- `Pro Tools Mixing`: one independent mixing session folder per song within a parent project

The app includes `YYMMDD_1st_song_Mix` as the reference format for Pro Tools session names.

### Logging and review

- Record date, duration, tempo, success rate, notes, recording or output reference, completion criterion, and blocker in one editor.
- Review success-rate or BPM changes for the same exercise across one- and four-week ranges.
- Reusing the same blocker name on multiple dates groups it as a recurring issue.
- Weekly review compares time, log count, average success rate, goal completion, and category totals with the previous week.

### Templates and refresher roadmap

- Includes templates for piano, rhythm, arranging, transcription, guitar, sight-singing, and harmony.
- Open a built-in template directly as a task, practice log, or project.
- Copy a built-in template into personal templates and customize its output and completion criterion.
- Pro Tools and Melodyne refresher roadmaps break relearning into short, recordable exercises.

### Static public package

- A read-only static build is available for a Jovaris Audio website or GitHub Pages.
- It displays the public samples and weekly summary, then links to the hosted Chai Jegop app for adding, editing, and saving personal records.

## Current scope

- The Recording or Output field stores a filename, local path, or web link. It does not upload the file itself.
- Personal record export, import, and collaboration are not included yet.
- The external static build is read-only.
