from django.shortcuts import render
from django.views.generic import View
from django.template.response import TemplateResponse

from tasks.models import Task

class TaskListView(View):
    def get(self, request, *args, **kwargs):
        context = {
            'task_list': Task.objects.all()
        }
        return TemplateResponse(request, 'task_list.html', context)

from django.http import HttpResponseRedirect

class TaskAddView(View):
    def get(self, request, *args, **kwargs):
        return TemplateResponse(request, 'task_add.html', {})

    def post(self, request, *args, **kwargs):
        description = request.POST['description']
        Task.objects.create(description=description)
        return HttpResponseRedirect('/')

class TaskDoneView(View):
    def get(self, request, *args, **kwargs):
        task = Task.objects.get(id=kwargs['task_id'])
        task.is_done = True
        task.save()
        return HttpResponseRedirect('/')
