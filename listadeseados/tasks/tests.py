import test
import datetime

from django.utils import timezone
from django.test import TestCase

from .models import Question, Choice

# Create your tests here.

class QuestionMethodTests(TestCase):

    def test_create_question(self):
        q = Task(description = "Nuevo libro", is_done = True)

        self.assertEqual(q.description, "Nuevo libro")
