import http.server
import socketserver
import os
from sys import argv

# Get the current directory of the script
current_dir = os.path.dirname(os.path.abspath(__file__))

# Define the server address and port
host = str(argv[1])
port = int(argv[2])  # You can change this to any available port

# Change to the current directory
os.chdir(current_dir)

# Start the HTTP server
with socketserver.TCPServer((host, port), http.server.SimpleHTTPRequestHandler) as httpd:
    print(f"Serving at http://{host}:{port}/ (Ctrl+C to stop)")
    httpd.serve_forever()
