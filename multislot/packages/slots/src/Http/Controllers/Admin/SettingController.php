<?php

namespace Packages\Slots\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class SettingController extends Controller
{
    public function cloneVariation(Request $request, $variation)
    {
        return File::copyDirectory(
            storage_path('app/public/games/slots/' . $variation),
            storage_path('app/public/games/slots/' . $request->variation)
        ) ? $this->successResponse() : $this->errorResponse(__('There was an error while copying symbol images.'));
    }
    public function removeVariation(Request $request, $variation)
    {
        return File::deleteDirectory(
            storage_path('app/public/games/slots/' . $variation)
        ) ? $this->successResponse() : $this->errorResponse(__('There was an error while deleting symbol images.'));
    }

    public function uploadImage(Request $request, $variation)
    {
        $path = FALSE;

        // check if image file is passed
        if ($request->hasFile('image') && $request->file('image')->isValid()) {
            // save uploaded image
            $path = $request->image->storeAs('games/slots/' . $variation, $request->image->getClientOriginalName(), 'public');
        }

        return $path
            ? $this->successResponse(['path' => '/storage/' . $path])
            : $this->errorResponse(__('There was an error while uploading the image.'));
    }
}
