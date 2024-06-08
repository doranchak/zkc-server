from itertools import product
import re

# Open the file in read mode
with open('suspects-list.txt', 'r') as file:
    # Read all lines from the file
    lines = file.readlines()

# Initialize an empty list to store the name parts
name_parts = []

# Iterate over each line
for line in lines:
    # Strip any leading/trailing whitespace and split the line into parts
    parts = line.strip().split()
    # Append the parts to the name_parts list
    name_parts.append(parts)

# Function to generate full name and initials combinations
def generate_combinations(parts):
    # Create a list of tuples containing the full part and its initial
    parts_with_initials = [(part, part[0], '') for part in parts]
    # Generate all combinations of full parts and initials
    combinations = list(product(*parts_with_initials))
    # Join each combination into a single string and return the result
    return [' '.join(combination).strip() for combination in combinations]

# Print the combinations for each name
for parts in name_parts:
    combinations = generate_combinations(parts)
    for combination in combinations:
        result = re.sub(r'\s+', ' ', combination)
        if (len(result) > 0):
            print(result)
