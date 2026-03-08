# Age Eligibility Checker

A simple JavaScript utility that determines whether a person is eligible to vote based on their age.

## Overview

The `age_eligibility` function takes a person's name and age as inputs and returns a message indicating whether they meet the minimum voting age requirement of 18 years.

## Usage

```javascript
age_eligibility(name, age)
```

### Parameters

| Parameter | Type   | Description              |
|-----------|--------|--------------------------|
| `name`    | String | The person's name        |
| `age`     | Number | The person's age in years |

### Returns

A string message indicating eligibility:
- `"<name> is eligible to vote"` — if age is 18 or older
- `"<name> is not eligible to vote"` — if age is under 18

## Examples

```javascript
age_eligibility('John', 18);  // "John is eligible to vote"
age_eligibility('Jane', 17);  // "Jane is not eligible to vote"
age_eligibility('Alex', 25);  // "Alex is eligible to vote"
```

## Logic

```
age >= 18  →  eligible
age < 18   →  not eligible
```

## Requirements

- Node.js (any modern version)

## Running the File

```bash
node app.js
```
