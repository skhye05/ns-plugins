import { ImageSource, Frame as frame, Utils } from "@nativescript/core";

import { EditPhotoOptions, PhotoEditor as PhotoEditorBase, PhotoEditorControl } from ".";

function getRootViewController() {
    const app = UIApplication.sharedApplication;
    const win = app.keyWindow || (app.windows && app.windows.count > 0 && app.windows.objectAtIndex(0));
    return win.rootViewController;
}

export class PhotoEditor implements PhotoEditorBase {
    private _bundle: NSBundle;
    private _delegate: PhotoEditorDelegateImpl;

    constructor() {
        this._bundle = NSBundle.bundleForClass(PhotoEditorViewController.class());
    }

    public editPhoto(options: EditPhotoOptions) {
        const viewController = PhotoEditorViewController.alloc().initWithNibNameBundle("PhotoEditorViewController", this._bundle);
        const nativeHiddenControls: control[] = [control.Sticker, control.Share, control.Save];

        options.hiddenControls = options.hiddenControls || [];

        for (const hiddenControl of options.hiddenControls) {
            switch (hiddenControl) {
                case PhotoEditorControl.Crop:
                    nativeHiddenControls.push(control.Crop);
                    break;

                case PhotoEditorControl.Draw:
                    nativeHiddenControls.push(control.Draw);
                    break;

                case PhotoEditorControl.Text:
                    nativeHiddenControls.push(control.Text);
                    break;

                // case PhotoEditorControl.Save:
                //     nativeHiddenControls.push(control.Save);
                //     break;

                case PhotoEditorControl.Clear:
                    nativeHiddenControls.push(control.Clear);
                    break;

                default:
                    throw new Error(`Unknown control sent: ${hiddenControl}!`);
            }
        }

        return new Promise<ImageSource>((resolve, reject) => {
            this._delegate = PhotoEditorDelegateImpl.initWithResolveReject(resolve, reject);

            viewController.image = options.imageSource.ios;
            viewController.hiddenControls = nativeHiddenControls as any;
            viewController.photoEditorDelegate = this._delegate;
            viewController.modalPresentationStyle = UIModalPresentationStyle.FullScreen

            
            Utils.ios.getVisibleViewController(getRootViewController()).presentViewControllerAnimatedCompletion(viewController, true, null);
            // frame.topmost().ios.controller.presentViewControllerAnimatedCompletion(viewController, true, null);
        });
    }
}

@ObjCClass(PhotoEditorDelegate)
class PhotoEditorDelegateImpl extends NSObject implements PhotoEditorDelegate {
    private _resolve: (imagesSource: ImageSource) => void;
    private _reject: (e: Error) => void;


    public static initWithResolveReject(resolve: (imageSource: ImageSource) => void, reject: (e: Error) => void): PhotoEditorDelegateImpl {
        const delegate = PhotoEditorDelegateImpl.new() as PhotoEditorDelegateImpl;

        delegate._resolve = resolve;
        delegate._reject = reject;

        return delegate;
    }


    public canceledEditing() {
        this._reject(new Error("User cancelled edit."));
    }

    public doneEditingWithImage(image: UIImage) {
        const result = new ImageSource();

        result.setNativeSource(image);

        this._resolve(result);
    }

}