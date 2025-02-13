import requests
import csv
import io
import configparser

# Load configuration from config.ini
CONFIG_FILE = "config.ini"


def load_config():
    """Load the CID from a configuration file"""
    config = configparser.ConfigParser()
    config.read(CONFIG_FILE)
    return config["IPFS"]["CID"]


def fetch_college_data(cid):
    """Fetch CSV file from IPFS and parse it"""
    IPFS_URL = f"https://ipfs.io/ipfs/{cid}"
    response = requests.get(IPFS_URL)

    if response.status_code == 200:
        csv_data = io.StringIO(response.text)
        reader = csv.DictReader(csv_data)  # Converts CSV into a dictionary
        return list(reader)  # Convert to list of dictionaries
    else:
        print(f"Error fetching file: {response.status_code}")
        return None


def main():
    """Main function to fetch and display college data"""
    cid = load_config()
    print(f"Using CID: {cid}")

    college_data = fetch_college_data(cid)

    if college_data:
        print("Successfully retrieved college data!")
        for row in college_data[:5]:  # Print first 5 rows for preview
            print(row)
    else:
        print("Failed to retrieve data.")


if __name__ == "__main__":
    main()
