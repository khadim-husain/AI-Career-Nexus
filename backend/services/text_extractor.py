# Text Extractor Service
# Extracts text from PDF and image files

import pdfplumber
import pytesseract
from PIL import Image
import io
from typing import Optional

class TextExtractor:
    """Service to extract text from PDF and image files"""
    
    @staticmethod
    async def extract_from_pdf(file_content: bytes) -> str:
        """Extract text from PDF file using pdfplumber"""
        try:
            text = ""
            with pdfplumber.open(io.BytesIO(file_content)) as pdf:
                for page in pdf.pages:
                    page_text = page.extract_text()
                    if page_text:
                        text += page_text + "\n"
            return text.strip()
        except Exception as e:
            raise Exception(f"Error extracting text from PDF: {str(e)}")
    
    @staticmethod
    async def extract_from_image(file_content: bytes) -> str:
        """Extract text from image using OCR (Tesseract)"""
        try:
            # Open image from bytes
            image = Image.open(io.BytesIO(file_content))
            
            # Perform OCR
            text = pytesseract.image_to_string(image)
            
            return text.strip()
        except Exception as e:
            raise Exception(f"Error extracting text from image: {str(e)}")
    
    @staticmethod
    async def extract_text(file_content: bytes, file_type: str) -> str:
        """
        Main method to extract text based on file type
        
        Args:
            file_content: File content in bytes
            file_type: MIME type or extension (pdf, jpg, png, etc.)
        
        Returns:
            Extracted text as string
        """
        file_type = file_type.lower()
        
        if 'pdf' in file_type:
            return await TextExtractor.extract_from_pdf(file_content)
        elif any(img_type in file_type for img_type in ['jpg', 'jpeg', 'png', 'bmp', 'tiff']):
            return await TextExtractor.extract_from_image(file_content)
        else:
            raise ValueError(f"Unsupported file type: {file_type}")
