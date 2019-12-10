# Jira Hacks

This is tiny collection of bookmarklets to bring new handy features to Jira.

## Installation

1. Go to your browser and create a new bookmark in the bookmark bar
2. Fill the bookmark properties with the values, depending on your use case:

| Name                      | URL (copy the source code from the linked file)                    | Result: what does it do?                                                                                       | Where does it work?                                | Constraints                                     |
| ------------------------- | ------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- | ----------------------------------------------- |
| ⏲ Σ [ Remaining Estimate] | [./dist/bookmark-urls/estimate-effort](./dist/bookmark-urls/estimate-effort) | You get a popup window with the estimated remaining effort of the currently displayed issues.                  | issue navigator                                    | note "preparation for effort calculation" below |
| 💶 [ Calculate Costs ]    | [./dist/bookmark-urls/calculate-costs](./dist/bookmark-urls/calculate-costs) | You get prompted the cost per hour and receive an aggerated sum of the costs of the currently filtered issues. | issue navigator                                    | note "preparation for effort calculation" below |
| 📋 ← [ Issue Title ]      | [./dist/bookmark-urls/copy-title](./dist/bookmark-urls/copy-title)             | Copy issue key + summary to clipboard                                                                          | issue detail view / Kanban board / issue navigator | Google Chrome only                              |
| 📋 ← [ Issue Key ]      | [./dist/bookmark-urls/copy-key](./dist/bookmark-urls/copy-key)             | Copy issue key to clipboard                                                                          | issue detail view / Kanban board / issue navigator | Google Chrome only                              |

## Prerequisites / preparation for effort calculation

1. Go to your Jira instance
2. Navigate to the issues navigator / issue search / filter view
3. At the top right corner press the button "Change view" -> Change the view to "List View"
4. At top right corner of the issue list, press the "Columns" button and select the "remaining estimate" field

## Usage

1. Go to your Jira instance
2. Navigate to the view from the table ("Where does it work?")
3. Press the new bookmark button

## Build (Development)

Clone this repo, navigate to its folder with a terminal and run:

```bash
npm install
npm run build
```
